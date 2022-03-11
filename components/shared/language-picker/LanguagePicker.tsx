import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import { useState } from "react";
import { Language, LANGUAGES_MAP } from "types/Language";
import LanguagesList from "./LanguageList";

type LanguagePickerProps = {
  value: Language | null;
  onChange: (value: Language | null) => void;
};

const LanguagePicker = ({ value, onChange }: LanguagePickerProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const openModal = () => setIsModalOpen(!isModalOpen);
  const closeModal = () => setIsModalOpen(false);
  const openPopover = () => setIsPopoverOpen(!isPopoverOpen);
  const closePopover = () => setIsPopoverOpen(false);

  const handlePick = (value: Language | null) => {
    onChange(value);
    closeModal();
    closePopover();
  };

  const label = value ? LANGUAGES_MAP[value].label : "All languages";

  return (
    <>
      <Box d={{ base: "block", md: "none" }}>
        <Button onClick={openModal} size="sm" rightIcon={<ChevronDownIcon />}>
          {label}
        </Button>
        <Modal isOpen={isModalOpen} onClose={closeModal} size="full">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader fontSize="md">Select a language!</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <LanguagesList selected={value} onChange={handlePick} />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
      <Box d={{ base: "none", md: "block" }}>
        <Popover isOpen={isPopoverOpen} onClose={closePopover}>
          <PopoverTrigger>
            <Button
              onClick={openPopover}
              size="sm"
              rightIcon={<ChevronDownIcon />}
            >
              {label}
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Select a language!</PopoverHeader>
            <PopoverBody w="500px">
              <LanguagesList selected={value} onChange={handlePick} />
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Box>
    </>
  );
};

export default LanguagePicker;
