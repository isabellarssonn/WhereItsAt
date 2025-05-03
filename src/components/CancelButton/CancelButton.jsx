import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import "./cancelButton.css"

function CancelButton() {
  return (
    <button className='cancel-btn'>
        <FontAwesomeIcon icon={faXmark} className='xmark-icon' />
    </button>
  )
}

export default CancelButton