import React from "react";
import { Container, Box, Text, Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import Login from "../../Components/Authentication/Login";
import SignUp from "../../Components/Authentication/SignUp";

const HomePages = () => {
    return (
        <Container maxW="xl" centerContent>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                p={3}
                bg={"white"}
                w="100%"
                m="40px 0px 15px 0px"
                borderRadius="lg"
                borderWidth="1px"
            >
                <Text fontSize="4xl" fontFamily="work sans">
                    Chat Talk
                </Text>
            </Box>
            <Box bg={"white"} w="100%" p={4} borderRadius="lg" borderWidth="1px">
                <Tabs variant="soft-rounded">
                    <TabList mb={'1em'}>
                        <Tab width={'50%'}>Sign In</Tab>
                        <Tab width={'50%'}>Sign Up</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Login/>
                        </TabPanel>
                        <TabPanel>
                            <SignUp/>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Container>
    );
};

export default HomePages;
