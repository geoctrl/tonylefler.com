import { Button } from "../../../library/button/button";
import { Modal } from "../../../library/modal/modal";
import { createSignal } from "solid-js";
import { ModalHeader } from "../../../library/modal/modal-header";
import { ModalBody } from "../../../library/modal/modal-body";
import { ModalFooter } from "../../../library/modal/modal-footer";

export const ModalPage = () => {
  const [open, setOpen] = createSignal(false);
  return (
    <div class="mb-8">
      <h1>Modal</h1>
      <div>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
      </div>
      <Modal show={open()} onClose={() => setOpen(false)}>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalBody>
          Cheddar cheese and biscuits danish fontina. Caerphilly who moved my
          cheese brie taleggio camembert de normandie camembert de normandie
          cheese and wine red leicester. Pepper jack babybel st. agur blue
          cheese airedale jarlsberg fromage who moved my cheese cream cheese.
          The big cheese camembert de normandie cheese triangles.
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
