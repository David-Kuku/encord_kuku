type Modal = {
    show: boolean;
    children: JSX.Element;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onClose: () => void;
    className: string
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Modal = ({ show, onClose, children, className }: Modal) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const closeModal = (e: any) => {
      if (e.target.classList.contains('container')) {
        onClose();
      }
    };
  
    return (
      <>
        {show ? (
          <section className='fixed z-[5000] w-[100vw] top-0 left-0 right-0 bottom-0 bg-[#061A1480]'>
            <div
              onClick={closeModal}
              className=' w-full h-full flex items-center justify-center'
            >
              <section className={`w-full max-w-[479px] z-10  bg-white rounded-xl ${className}`}>
                <div className='w-full max-w-[479px] mx-auto space-y-[40px] p-6'>{children}</div>
              </section>
            </div>
          </section>
        ) : null}
      </>
    );
  };
  
  export default Modal;
  