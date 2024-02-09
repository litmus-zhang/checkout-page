import { HStack, Input, VStack, FormControl, FormLabel, Button } from '@chakra-ui/react'

function App() {

  return (
    <div className="bg-white shadow-md my-10 p-10 w-[400px] mx-auto flex justify-center items-start flex-col gap-2 text-left">
      <h1 className='font-bold text-2xl'>Checkout Page</h1>
      <VStack className="text-left items-start">
        <p className='flex self-start'>Personal Details</p>
        <HStack>
          <FormControl>
            <FormLabel>Firstname</FormLabel>
            <Input type='text' placeholder='firstname' />
          </FormControl>
          <FormControl>
            <FormLabel>Lastname</FormLabel>
            <Input type='text' placeholder='Lastname' />
          </FormControl>
        </HStack>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type='email' placeholder='johndoe@gmail.com' />
        </FormControl>
      </VStack>
      <VStack className="">
        <p className='flex self-start'>Billing Details</p>
        <FormControl>
          <FormLabel>Name on Card</FormLabel>
          <Input type='text' placeholder='John Doe' />
        </FormControl>
        <FormControl>
          <FormLabel>Card Number</FormLabel>
          <Input type='text' placeholder='1234567890'/>
        </FormControl>
        <HStack>
          <FormControl>
            <FormLabel>Expiry Date</FormLabel>
            <Input type='text' placeholder='Expiry' />
          </FormControl>
          <FormControl>
            <FormLabel>CVV</FormLabel>
            <Input type='text' placeholder='123' />
          </FormControl>
        </HStack>
      </VStack>
      <VStack className='w-full'>
        <p className='flex self-start'>Have a Coupon?</p>
        <FormControl >
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
