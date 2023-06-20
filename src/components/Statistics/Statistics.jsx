import { List, Item, Text } from "./Statistics.styled";
import PropTypes from 'prop-types';

export const Statistics = props => { 
    const { good, neutral, bad, total, positiveFeedback } = props;

    return (
        <List>
            <Item>
                <Text>Good: {good}</Text>
            </Item>
            <Item>
                <Text>Neutral: {neutral}</Text>
            </Item>
            <Item>
                <Text>Bad: {bad}</Text>
            </Item>
            <Item>
                <Text>Total: {total()}</Text>
            </Item>
            <Item>
                <Text>Positive Feedback: {positiveFeedback()}%</Text>
            </Item>
        </List>
    )
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.func.isRequired,
    positiveFeedback: PropTypes.func.isRequired,
};
