import React from "react";

class Interest extends React.Component {
    render() {
        return (<section className="section-wrapper section-interest gray-bg">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h2>Interest</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="content-item">
                            <h3>Books</h3>
                            <p>Rapacious reader of motivational books, bibliographies, histories, mythologies, literary  and contemporary Books</p>
                        </div>
                        <div className="content-item">
                            <h3>Travel</h3>
                            <p>Like traveling to new places to explore new and varied culture, and experience there food and beverage.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>)
    }
}

export default Interest;