import React, {useState} from 'react'
import Modal from 'react-modal';

const customStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(05, 05, 05, 0.95)'
      },
      content: {
        position: 'absolute',
        top: '100px',
        bottom: '100px',
        left: '400px',
        right: '400px',
        border: 'unset',
        background: '#141414',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '10px',
        outline: 'none',
        padding: '20px'
      }
  };

function Box(props) {

    console.log(props.subject)

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }


    return (
        <div>
            <div onClick={openModal} className="box-main-div">
                <div className="box-title-div">
                    {props.subject[0][0]}
                </div>
                <div className="box-desc-div">
                    {props.subject[0][1]}
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div onClick={closeModal} className="modal-close-button">x</div>
                <div className="modal-title-div">
                    <h2 style={{marginTop:"10px"}}>{props.subject[0][0]}</h2>
                </div>

                <div className="modal-content-parent-div">
                    {
                        modalIsOpen && props.subject[1].map((value, index) => (
                            <a href={props.subject[2][index]}>
                                <div className="modal-content-div">
                                <p className="modal-content-title">{value}</p>
                                <p className="modal-content-desc">{props.subject[3][index]}</p>
                                </div>
                            </a>
                        )
                    )}
                </div>
            </Modal>
        </div>
    )
}

export default Box
