import { Wrapper, Button } from "./FeedbackButtons.styled";
import PropTypes from 'prop-types';

export const FeedbackButtons = props => { 
    const { options, onClickButton } = props;

    return (
        <Wrapper>
            {options.map(item => {
                return (
                    <Button
                        type="button"
                        onClick={onClickButton}
                        value={item}
                        key={item}
                    >
                        {item.slice(0, 1).toUpperCase() + item.slice(1)}
                    </Button>
                )
            })}
        </Wrapper>
    );
};

FeedbackButtons.propTypes = {
    options: PropTypes.array.isRequired,
    onClickButton: PropTypes.func.isRequired,

};