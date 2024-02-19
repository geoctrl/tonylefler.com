import { createSignal } from "solid-js";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@stem/components";

export const ModalPage = () => {
  const [open, setOpen] = createSignal(false);
  return (
    <div class="mb-8">
      <h1>Modal</h1>
      <div>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
      </div>
      <Modal show={open()} onClose={() => setOpen(false)}>
        <ModalHeader title="Delete Collection" />
        <ModalBody>
          Delete the "something" collection. This action is not recoverable.
        </ModalBody>
        <ModalFooter>
          <Button variant="tertiary">Cancel</Button>
          <Button variant="primary" onClick={() => setOpen(false)}>
            Submit
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
