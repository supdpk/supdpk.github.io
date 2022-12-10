import React from "react";
import feedbackValidation from "../../../helper/validation/feedback.validation";

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: feedbackValidation.form,
            address: {
                office_address:"",
                phone:"",
                email:""
            }
        }
        this.formSubmit = this.formSubmit.bind(this);
        this.fieldtype = this.fieldtype.bind(this);
    }
    formSubmit(event){
        event.preventDefault();
        let {form} = this.state;
        console.log(form)
        // this.setState({form});
    }
    fieldtype(event){
        let {form} = this.state;
        form[event.target.name].value = event.target.value;
        form = feedbackValidation.validate(form);
        this.setState({form});
    }

    render() {
        let { form } = this.state;
        return (<section className="section-contact section-wrapper gray-bg">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h2>Contact</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <address>
                            <strong>Office Address</strong><br />
                            Trancisco Labs<br />
                            J-9/1, DLF Phase 2, Sector - 28<br />
                            Gurgaon, Haryana, India
                        </address>
                        <address>
                            <strong>Mobile</strong><br />
                            +91 843 738 9009
                        </address>
                        <address>
                            <strong>Email</strong><br />
                            <a href="mailto:deepak.belbase4@gmail.com">deepak.belbase4@gmail.com</a>
                        </address>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="feedback-form">
                            <h2>Get in touch</h2>
                            <form onSubmit={this.formSubmit}>
                                <div className={(form.name.error=="")?"form-group":"form-group has-error"}>
                                    <label forhtml="InputName" className="control-label"> Name </label>
                                    <input type="text" name="name" className="form-control" id="InputName"
                                        placeholder="Full Name" onChange={this.fieldtype}/>
                                    <p className="text-danger text-small">{(form.name.error=="")?"":form.name.error}</p>

                                </div>
                                <div className={(form.email.error=="")?"form-group":"form-group has-error"}>
                                    <label forhtml="InputEmail" className="control-label">Email address</label>
                                    <input type="email" name="email" className="form-control" id="InputEmail"
                                        placeholder="Email" onChange={this.fieldtype}/>
                                        <p className="text-danger text-small">{(form.email.error=="")?"":form.email.error}</p>
                                </div>
                                <div className={(form.phone.error=="")?"form-group":"form-group has-error"}>
                                    <label forhtml="InputPhone">Phone No</label>
                                    <input type="text" name="phone" className="form-control" id="InputPhone"
                                        placeholder="Phone Number" onChange={this.fieldtype}/>
                                    <p className="text-danger text-small">{(form.phone.error=="")?"":form.phone.error}</p>
                                </div>
                                <div className={(form.subject.error=="")?"form-group":"form-group has-error"}>
                                    <label forhtml="InputSubject">Subject</label>
                                    <input type="text" name="subject" className="form-control" id="InputSubject"
                                        placeholder="Subject" onChange={this.fieldtype}/>
                                    <p className="text-danger text-small">{(form.subject.error=="")?"":form.subject.error}</p>
                                </div>
                                <div className={(form.message.error=="")?"form-group":"form-group has-error"}>
                                    <label forhtml="message-text" className="control-label">Message</label>
                                    <textarea className="form-control" rows="4" required="" name="message" id="message-text"
                                        placeholder="Write message" onChange={this.fieldtype}></textarea>
                                    <p className="text-danger text-small">{(form.message.error=="")?"":form.message.error}</p>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>)
    }
}

export default Contact;