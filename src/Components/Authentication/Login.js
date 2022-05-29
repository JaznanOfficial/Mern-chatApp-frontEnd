import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, StackDivider, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [show, setShow] = useState(false);
    const submitHandler = (e) => {
        e.preventDefault();

        console.log({email, password});
    };
    return (
        <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4} align="stretch">
            
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
            

            <Button
                colorScheme={"blue"}
                variant="solid"
                width={"100%"}
                marginTop={"1em"}
                onClick={submitHandler}
            >
                Sign In
            </Button>
            <Button
                colorScheme={"red"}
                variant="solid"
                width={"100%"}
                // marginTop={"1em"}
                onClick={() => {
                    setEmail('guest@example.com');
                    setPassword('password');

                }}
            >
                Get Guest User Credentials
            </Button>
        </VStack>
    );
};

export default Login;