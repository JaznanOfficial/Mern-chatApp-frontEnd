import React, { useState } from "react";
import {
    Stack,
    HStack,
    VStack,
    StackDivider,
    FormControl,
    FormLabel,
    Input,
    Box,
    InputGroup,
    InputRightElement,
    Button,
} from "@chakra-ui/react";

const SignUp = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [pic, setPic] = useState();
    const [show, setShow] = useState(false);
    const [confirmShow, setConfirmShow] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();

        console.log({ name, email, password, confirmPassword, pic });
    };

    return (
        <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4} align="stretch">
            <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input placeholder="enter your name" onChange={(e) => setName(e.target.value)} />
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input placeholder="enter your email" onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input
                        type={show ? "text" : "password"}
                        placeholder="enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputRightElement width={"4.5rem"}>
                        <Button h={"1.75rem"} size="sm" onClick={() => setShow(!show)}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup>
                    <Input
                        type={confirmShow ? "text" : "password"}
                        placeholder="confirm your password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <InputRightElement width={"4.5rem"}>
                        <Button
                            h={"1.75rem"}
                            size="sm"
                            onClick={() => setConfirmShow(!confirmShow)}
                        >
                            {confirmShow ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Upload Your Profile Picture</FormLabel>
                <Input
                    type={"file"}
                    placeholder="upload your profile picture"
                    p={1.5}
                    accept="image/*"
                    onChange={(e) => setPic(e.target.files[0])}
                ></Input>
            </FormControl>

            <Button
                colorScheme={"blue"}
                variant="solid"
                width={"100%"}
                marginTop={"1em"}
                onClick={submitHandler}
            >
                Sign Up
            </Button>
        </VStack>
    );
};

export default SignUp;
