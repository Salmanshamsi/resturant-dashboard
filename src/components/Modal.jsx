import { RxCross2 } from "react-icons/rx";

const Modal = ({ isModalOpen, closeModal }) => {
  return (
    <>
      <div
        className={`fixed z-10 inset-0 overflow-y-auto ${
          isModalOpen ? "" : "hidden"
        }`}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 transition duration-700">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div
            className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all my-5 sm:align-middle max-w-lg w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <form className="bg-white p-5 rounded">
              <div className="flex justify-end">
                <RxCross2
                  onClick={() => {
                    closeModal(false);
                  }}
                  fontSize={24}
                  className="text-indigo-600"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label>Dish Name</label>
                <input
                  className="border relative bg-gray-100 px-2 py-1"
                  type="text"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label>Dish Price</label>
                <input
                  className="border relative bg-gray-100 px-2 py-1"
                  type="number"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label>Dish Category</label>
                <input
                  className="border relative bg-gray-100 px-2 py-1"
                  type="text"
                />
              </div>
              <div className="flex flex-col mb-4">
                <input className="border relative" type="file" />
              </div>
              <button className="w-full py-2 mt-5 bg-indigo-600 hover:bg-indigo-700 relative text-white">
                Add Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
