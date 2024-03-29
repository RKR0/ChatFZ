import { ViewIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  IconButton,
  Text,
  Image,
} from "@chakra-ui/react";

const ProfileModal = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton display={{ base: "flex" }} icon={<ViewIcon />} onClick={onOpen} />
      )}
      <Modal size="lg" onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent h="410px">
          <ModalHeader
            fontSize="40px"
            fontFamily="Work sans"
            display="flex"
            justifyContent="center"
          >
            {user.name}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between"
          >
            <Image
              borderRadius="full"
              boxSize="150px"
              src={user.profileImage!==''?user.profileImage:"data:image/jpeg;base64,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"}
              alt={user.name}
            />
           
            <Text
              fontSize={{ base: "28px", md: "30px" }}
              fontFamily="Work sans"
            >
              Email: {user.email}
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileModal;
