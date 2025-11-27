import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material";

const SubmitSuccessModal = ({ open, onClose }: any) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle style={{ textAlign: "center" }}>
        Submitted Successfully!
      </DialogTitle>

      <DialogActions>
        <Button variant="contained" onClick={onClose}>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SubmitSuccessModal;
