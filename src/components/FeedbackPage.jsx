import { BiAngry, BiSad, BiSmile, BiHappy, BiHappyHeartEyes } from "react-icons/bi";

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
            text: "Amazing"
        },
    ];

    return (
        <form className="feedback-form" onSubmit={(e) => {e.preventDefault()}}>
            <h2 className="feedback-title">Give feedback</h2>
            <div className="feedback-content">
                <div className="feedback-reactions">
                    {reactions.map((reaction, index) => (
                        <div key={index}>
                            <input
                                type="radio"
                                name="reaction"
                                id={reaction.text}
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
                <textarea className="feedback-areas" rows="4" cols="50" spellCheck="false" placeholder="Other suggestions..."></textarea>
                <button className="feedback-submit-btn">Submit</button>
            </div>
        </form>
    );
}

export default FeedbackPage;