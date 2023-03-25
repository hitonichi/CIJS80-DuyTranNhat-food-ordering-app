import { BiAngry, BiSad, BiSmile, BiHappy, BiHappyHeartEyes } from "react-icons/bi";
import FoodServices from '../services/food'

const FeedbackPage = () => {

    const reactions = [
        {
            icon: <BiAngry />,
            text: "Terrible"
        },
        {
            icon: <BiSad />,
            text: "Bad"
        },
        {
            icon: <BiSmile />,
            text: "Okay"
        },
        {
            icon: <BiHappy />,
            text: "Good"
        },
        {
            icon: <BiHappyHeartEyes />,
            text: "Great"
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e);
        // console.log(e.target);
        console.log(e.target.reaction.value);
        // console.log(e.target.feedbackArea.value);
        const feedback = {
            reaction: e.target.reaction.value,
            notes: e.target.feedbackArea.value
        }
        FoodServices
        .createFeedback(feedback)
        .then((res) => {
            // console.log(res);
            alert('Thank you for your opinion!');
            // e.target.reaction.value = "";
            document.querySelector('input[name="reaaction"]:checked').checked = false;
            console.log(e.target.reaction.value);
            e.target.feedbackArea.value = "";
        })
        .catch(e => {
            alert('Your order cannot be processed right now. Please try again later.')
            // console.log(e);
        })
    }

    return (
        <form className="feedback-form" onSubmit={(e) => {handleSubmit(e)}}>
            <h2 className="feedback-title">Give feedback</h2>
            <div className="feedback-content">
                <div className="feedback-reactions">
                    {reactions.map((reaction, index) => (
                        <div key={index}>
                            <input
                                type="radio"
                                name="reaction"
                                id={reaction.text}
                                value={reaction.text}
                                className="feedback-reaction-radio"></input>
                            <label htmlFor={reaction.text}>
                                <div className="feedback-react">
                                    {reaction.icon}
                                    <span className="feedback-text">{reaction.text}</span>
                                </div>
                            </label>
                        </div>
                    ))}
                </div>
                <h4 className="feedback-subtitle">Tell us what can be improved?</h4>
                <textarea name="feedbackArea" className="feedback-areas" rows="4" cols="50" spellCheck="false" placeholder="Other suggestions..."></textarea>
                <button className="feedback-submit-btn">Submit</button>
            </div>
        </form>
    );
}

export default FeedbackPage;