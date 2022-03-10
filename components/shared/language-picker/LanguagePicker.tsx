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
  SelectField,
} from "@chakra-ui/react";
import { useState } from "react";
import { ALL_LANGUAGES, LANGUAGES } from "types/Language";
import LanguagesList from "./LanguageList";

function getOptions() {
  const options: { label: string; value: string }[] = LANGUAGES.map((lang) => ({
    label: lang,
    value: lang,
  }));
  options.shift(); // remove unknown
  options.pop(); // remove all langauges
  options.push({ label: ALL_LANGUAGES, value: "" });
  return options;
}

type LanguagePickerProps = {
  value: string;
  onChange: (value: string) => void;
};

const LanguagePicker = ({ value, onChange }: LanguagePickerProps) => {
  const options = getOptions();
  const selected = options.find((option) => option.value === value);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const openModal = () => setIsModalOpen(!isModalOpen);
  const closeModal = () => setIsModalOpen(false);
  const openPopover = () => setIsPopoverOpen(!isPopoverOpen);
  const closePopover = () => setIsPopoverOpen(false);

  const handlePick = (value: string) => {
    onChange(value);
    closeModal();
    closePopover();
  };

  return (
    <>
      <Box d={{ base: "block", md: "none" }}>
        <Button onClick={openModal} size="sm" rightIcon={<ChevronDownIcon />}>
          {selected?.label}
        </Button>
        <Modal isOpen={isModalOpen} onClose={closeModal} size="full">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader fontSize="md">Select a language!</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <LanguagesList options={options} selected={value} onChange={handlePick} />
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
              {selected?.label}
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Select a language!</PopoverHeader>
            <PopoverBody w="500px">
              <LanguagesList options={options} selected={value} onChange={handlePick} />
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Box>
    </>
  );
};

export default LanguagePicker;
