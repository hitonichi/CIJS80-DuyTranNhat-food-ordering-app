const ModalWrapper = (props) => {
    if (props.modal) {
        return (
            <div className="Modal">
                <div className="Modal-overlay" >
                    <div className="Modal-content">
                        {props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalWrapper