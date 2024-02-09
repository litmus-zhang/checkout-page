import { HStack, Input, VStack, FormControl, FormLabel, Button } from '@chakra-ui/react'

function App() {

  return (
    <div className="bg-white shadow-md p-10 w-[400px] mx-auto flex justify-center items-start flex-col gap-2 text-left">
      <h1 className='font-bold text-2xl'>Checkout Page</h1>
      <VStack className="text-left items-start">
        <p className='text-left'>Personal Details</p>
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
      <HStack className='w-full'>
        <Button className='w-full' colorScheme='red'>
          Cancel
        </Button>
        <Button className='w-full' colorScheme='green'>
          Confirm
        </Button>
      </HStack>
    </div>
  )
}

export default App
