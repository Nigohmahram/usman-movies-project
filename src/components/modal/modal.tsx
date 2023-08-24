import { useInfoStore } from '@/store';
import MuiModal from '@mui/material/Modal';
import {LiaTimesSolid} from 'react-icons/lia'
const Modal = () => {
        const { modal, setModal, currentMovie } = useInfoStore();

        const handleClose = () => {
                setModal(false);
        };


  return <MuiModal open={modal} onClose={handleClose}>
        <>
        <button onClick={() => setModal(false)} className='modalButton absolute right-[100px] top-[80px] !z-40 h-[60px] w-[60px] border-none bg-[#181818]'>
                <LiaTimesSolid className='w-9 h-9'/>
        </button>
        </>
        </MuiModal>
}

export default Modal
