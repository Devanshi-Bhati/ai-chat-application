import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';



type BasicModalProps = {
  open: boolean;
  onClose: () => void;
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: 650,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius:'20px'
};
const BasicModal: React.FC<BasicModalProps> = ({open, onClose}) => {

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" component="h2" className='!text-2xl !font-bold !italic'>
            THINKTALK
          </Typography>
          <Typography id="modal-modal-description" className="mt-2">
            The platform leverages the OpenAI API to deliver a real-time chat interface, enabling users to interact with powerful language models through smooth and responsive conversations. A Model Explorer UI, inspired by Hugging Face Spaces, allows users to visually browse and select models, explore capabilities, and compare outputs in an intuitive and user-friendly environment. To enhance task-specific performance, the system introduces micro-copilots—dedicated AI assistants tailored for distinct tasks such as summarizing lengthy text, translating content across languages, or rewriting in different tones or styles. These copilots are embedded within the interface to offer contextual, one-click functionality. Furthermore, the system incorporates a “Did you mean?” suggestion engine, which intelligently detects unclear or slightly misspelled inputs and offers corrections or clarifying options in real time. This not only reduces errors but also guides the user toward more productive interactions with the AI. Collectively, these features create a robust, interactive, and assistive AI environment for users ranging from casual chatters to advanced professionals.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
export default BasicModal