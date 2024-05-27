import * as React from 'react';
import '../style/style.css';

function formatCompactNumber(number) { //function to format the amonut with k appended
    if (number < 1000) {
        return number;
    } else if (number >= 1000 && number < 1_000_000) {
        return (number / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    } else if (number >= 1_000_000 && number < 1_000_000_000) {
        return (number / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
    } else if (number >= 1_000_000_000 && number < 1_000_000_000_000) {
        return (number / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B";
    } else if (number >= 1_000_000_000_000 && number < 1_000_000_000_000_000) {
        return (number / 1_000_000_000_000).toFixed(1).replace(/\.0$/, "") + "T";
    }
}
export default function CardComponent(props) {
    return (
        <div class="cards-main-list">
            <div class="row">
                <div class="d-flex align-items-center cards-image-coumn  col-xl-3 col-md-3 col-sm-4 col-12">
                    <figure class="figure"><img
                        src={props.data.card_image__c}
                        width="" height=""
                        alt={props.data.card_image__c} />
                    </figure>
                </div>
                <div class="ccDecCol col-xl-9 col-md-9 col-sm-8 col-12">
                    <div class="cards-main-sub-heading">
                        <h3>{props.data.card_name__c}</h3>
                        <p>{props.data.card_description__c}
                        </p><button type="button" class="comp-button btn btn-primary"><img
                            src="https://app.wefin.in/static/media/plusIcon.510b4141.svg" width="" height="" alt="Plus Icon" />Compare</button>
                    </div>
                    <div>
                        <div class="row">
                            <div class="col-xl-2 col-md-3 col-sm-4 col-12">
                                <div class="cards-info-block">
                                    <p>1st Year Fees<button type="button" class="btn btn-secondary"><img
                                        src="https://app.wefin.in/static/media/infoIcon.3b8121ee.svg" width="" height="" alt="" /></button>
                                    </p>
                                    <p>₹ {props.data.joining_fee_amount__c}</p>
                                </div>
                            </div>
                            <div class="col-xl-5 col-md-3 col-sm-4 col-12">
                                <div class="cards-info-block">
                                    <p>Best Suited for
                                        <button type="button" class="btn btn-secondary">
                                            <img
                                                src="https://app.wefin.in/static/media/infoIcon.3b8121ee.svg" width="" height="" alt=""
                                            />
                                        </button>
                                    </p>
                                    <p>
                                        {props.data.bestSuited.map((item, index) => {
                                            return (
                                                <span key={index} >
                                                    <img
                                                        src={item.image}
                                                        width="20"
                                                        height="20"
                                                        alt=""
                                                    />
                                                    {item.name}
                                                </span>
                                            );
                                        })}
                                    </p>
                                </div>
                            </div>
                            <div class="col-xl-5 col-md-3 col-sm-4 col-12">
                                <div class="cards-info-block cards-info-qualified-check-block">
                                    <p>Qualifying Criteria <button type="button" class="btn btn-secondary"><img
                                        src="https://app.wefin.in/static/media/infoIcon.3b8121ee.svg" width="" height="" alt="" /></button>
                                    </p>
                                    <p>Age: {props.data.age__c} Y min<span>&nbsp;</span>Monthly income: ₹ {formatCompactNumber(props.data.monthly_income__c)} above</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="cards-button-block"><button id="0" aria-controls="" aria-expanded="false" type="button"
                        class="cards-know-more-button btn btn-primary"><img src="https://app.wefin.in/static/media/plusIcon.510b4141.svg" width=""
                            heiight="" />Know More</button><button type="button"
                                class="cards-apply-button null btn btn-primary">Apply Now</button></div>
                </div>
            </div>
        </div>
    );
}
