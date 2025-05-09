import "./cancelButton.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function CancelButton() {
  return (
    <button className='cancel-btn' aria-label='cancel-button'>
        <FontAwesomeIcon icon={faXmark} className='xmark-icon' />
    </button>
  )
}

export default CancelButton