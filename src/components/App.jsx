import { Component } from "react";
import { Container } from "utils/Container";
import { Section } from "./Section/Section";
import { FeedbackButtons } from "./FeedbackButtons/FeedbackButtons";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notofication";

export class App extends Component { 
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    onUpdateFeedback = evt => {
        const { value } = evt.target;
        this.setState(prevState => {
            return {
                [value]: (prevState[value] += 1),
            };
        });
    };

    countTotalFeedback = () => { 
        const totalFeedback = Object.values(this.state);
        return totalFeedback.reduce((acc, item) => acc + item); 
    };

    countPositiveFeedback = () => { 
        return Math.round((this.state.good / this.countTotalFeedback()) * 100) ?? 0;
    };



    render() {
        const { good, neutral, bad } = this.state;
        return (
            <Container>
                <Section title="Please leave feedback">
                    <FeedbackButtons
                        options={Object.keys(this.state)}
                        onClickButton={this.onUpdateFeedback}
                    />
                </Section>
                <Section title="Statistics">
                    {this.countTotalFeedback() === 0 ? (
                        <Notification text="No feedback given"/>
                    ) : (
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={this.countTotalFeedback}
                            positiveFeedback={this.countPositiveFeedback}
                            />
                        )}
                </Section>
            </Container>
        );
    };
};