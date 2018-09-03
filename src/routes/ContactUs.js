import React, { Component } from 'react';
import { connect } from 'dva';
import { Form, Col, Input, Select, Button, message } from 'antd';
import { changeTitle } from '../utils/utils'
import styles from './ContactUs.less';

const Option = Select.Option;
@Form.create()
class ContactUs extends Component {
  handleSubmit= (e) => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if(!err) {
        this.props.dispatch({
          type: 'page/add',
          payload: values
        }).then(() => {
          message.success('你的留言已经成功发送。谢谢')
          this.props.form.resetFields()
        })
      }
    })
  }
  componentDidMount(){
    function delay(){
      const dom = document.querySelectorAll('.ant-form-item-required')
      if(dom){
        for(var i = 0; i < dom.length; i++){
          if(dom[i] && dom[i].tagName){
            dom[i].dataset.content = true
          }
        }
      }else {
        setTimeout(() => {
          delay()
        }, 500)
      }
    }
    delay()
  }

  render() {
    const { language: { contact, header } } = this.props;
    const { getFieldDecorator } = this.props.form;
    changeTitle(header.contactus)
    return (
      <div className={styles.contactContainer}>
        <article className={styles.contactArticle}>
          <div className={styles.contactHd}>
            <h1>{contact.title}</h1>
            <p>{contact.addr}</p>
            <p>{contact.phone}</p>
          </div>
        </article>
        <div style={{paddingBottom: 1}}>
        <div className={styles.contactForm}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item label={contact.name} required>
            <Col md={11} xs={11}>
              <Form.Item>
                {getFieldDecorator('firstName', {
                  rules: [{
                    required: true,
                    message: '请填写姓'
                  }]
                })(
                  <Input placeholder={contact.firstname} />
                )}
              </Form.Item>
            </Col>
            <Col md={11} xs={11} offset={2}>
              <Form.Item>
                {getFieldDecorator('lastName', {
                  rules: [{
                    required: true,
                    message: '请填写名'
                  }]
                })(
                  <Input placeholder={contact.lastname} />
                )}
              </Form.Item>
            </Col>
          </Form.Item>
          <Form.Item label={contact.email}>
              {getFieldDecorator('email', {
                rules: [{
                  required: true,
                  message: '请填写邮箱'
                },{
                  type: 'email',
                  message: '请填写正确的邮箱'
                }]
              })(
                <Input  />
              )}
          </Form.Item>
          <Form.Item label={contact.mobile}>
              {getFieldDecorator('phone', {
                rules: [{
                  pattern: /^1\d{10}$/,
                  message: '请填写正确的手机号'
                }]
              })(
                <Input  maxLength="11" />
              )}
          </Form.Item>
          <Form.Item label={contact.member}>
              {getFieldDecorator('memberNo')(
                <Input  maxLength="40" />
              )}
          </Form.Item>
          <Form.Item label={contact.type}>
              {getFieldDecorator('theme', {
                rules: [{
                  required: true,
                  message: '请选择主题类别'
                }]
              })(
                <Select placeholder="---" style={{width: '100%'}}>
                  <Option value={contact.tour}>{contact.tour}</Option>
                  <Option value={contact.business}>{contact.business}</Option>
                  <Option value={contact.advise}>{contact.advise}</Option>
                  <Option value={contact.other}>{contact.other}</Option>
                </Select>
              )}
          </Form.Item>
          <Form.Item label={contact.theme}>
              {getFieldDecorator('themeContent')(
                <Input.TextArea  rows={4} />
              )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" >{contact.submit}</Button>
          </Form.Item>
          </Form>
        </div>
        </div>
      </div>
    )
  }
}
export default connect(({page, language}) => ({
  page,
  language
}))(ContactUs);