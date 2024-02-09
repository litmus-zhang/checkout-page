import { HStack, Input, VStack } from '@chakra-ui/react'

function App() {

  return (
    <div className="bg-white shadow-md p-4">
      <VStack className="">
        <p>Personal Details</p>
        <HStack>
          <FormControl>
            <FormLabel>Firstname</FormLabel>
            <Input type='text' />
          </FormControl>
          <FormControl>
            <FormLabel>Lastname</FormLabel>
            <Input type='text' />
          </FormControl>
        </HStack>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type='email' />
        </FormControl>
      </VStack>
      <VStack className="">
        <p>Billing Details</p>
        <FormControl>
          <FormLabel>Name on Card</FormLabel>
          <Input type='email' />
        </FormControl>
        <FormControl>
          <FormLabel>Card Number</FormLabel>
          <Input type='email' />
        </FormControl>
        <HStack>
          <FormControl>
            <FormLabel>Expiry Date</FormLabel>
            <Input type='email' />
          </FormControl>
          <FormControl>
            <FormLabel>CVV</FormLabel>
            <Input type='email' />
          </FormControl>
        </HStack>
      </VStack>
      <VStack className="">
        <p>Have a Coupon?</p>
        <FormControl>
          <FormLabel>Coupon</FormLabel>
          <Input type='text' />
        </FormControl>

      </VStack>
    </div>
  )
}

export default App
