const nodemailer = require('nodemailer')
const htmlToText = require('html-to-text')


module.exports = class Email {
  constructor(user) {
    this.to = user.email;
    this.from = `ATM CLOTHING <${process.env.EMAIL_FROM}>`
  }

  newTransport() {
    return nodemailer.createTransport({
      service: 'SendGrid',
      auth: {
        user: process.env.SENDGRID_USERNAME,
        pass: process.env.SENDGRID_PASSWORD
      }
    })
  }

  async sendWelcome(phone, password) {
    const html = `
      <div>
        <h2>Chúc mừng bạn đã đăng ký thành công tài khoản tại ATM CLOTHING</h2>
        <h4>Sử dụng tài khoản sau để đăng nhập vào ATMC và sau đó đổi mật khẩu mới cho riêng bạn!</h4>
        <p><strong>Tài khoản: </strong>${phone}</p>
        <p><strong>Mật khẩu: </strong>${password}</p>
      </div>
    `
    await this.newTransport().sendMail({
      from: this.from,
      to: this.to,
      subject: "Khởi tạo tài khoản",
      html
    })
  }
}
