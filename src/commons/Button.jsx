import { func, string } from "prop-types";
import "./style.scss";

const Button = ({ text, onClick }) => {
    return (
        <button
            onClick={onClick}
            type="button"
        >
            {text}
        </button>
    );
};

Button.propTypes = {
    text: string.isRequired,
    onClick: func,
};

export default Button;
