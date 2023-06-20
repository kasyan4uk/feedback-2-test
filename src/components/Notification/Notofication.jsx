import { Text } from "./Notofocation.styled";
import PropTypes from 'prop-types';

export const Notification = props => { 
    const { text } = props;

    return (
        <Text>{ text }</Text>
    )
};

Notification.propTypes = {
    text: PropTypes.string.isRequired,
};