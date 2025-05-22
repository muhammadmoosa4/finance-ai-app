import Image from "next/image"
import message from "@/public/messge.webp"
import call from "@/public/call.webp"
import email from "@/public/email.webp"


const Form =  ( ) => {
    return (
        <div className="m-12 md:flex justify-center block">
            <div className="flex flex-col md:w-1/2">

                {/* message */}
                <div className="flex">
                   <div>
                   <Image src={message} height={50} width={50} alt="chat" />
                   </div>
                   <div className="ml-6">
                    <h2 className="text-2xl font-bold mb-2">Chat with us</h2>
                    <p className="md:text-md">
                    Need quick assistance? Chat with our support team in real-time through <br />
                     our website. Our live chat is available during business hours to help with any questions.

                    </p>
                   </div>
                </div>
                {/* phone */}
                <div className="flex mt-8">
                   <div>
                   <Image src={call} height={50} width={50} alt="chat" />
                   </div>
                   <div className="ml-6">
                    <h2 className="text-2xl font-bold mb-2">Give us a call</h2>
                    <p className="text-md">
                    Prefer to speak with us directly? Give us a call during business hours, and our support team will be happy to assist you.
📞 +1-800-123-4567

                    </p>
                   </div>
                </div>
                {/* email */}
                <div className="flex mt-8">
                   <div>
                   <Image src={email} height={50} width={50} alt="chat" />
                   </div>
                   <div className="ml-6">
                    <h2 className="text-2xl font-bold mb-2">Email Us</h2>
                    <p className="text-md">
                    📩 support@yourfinanceplatform.com <br />
For any queries or assistance, feel free to email us, and our team will respond promptly.

                    </p>
                   </div>
                </div>
            </div>
            
  {/* <!-- Left Form Section --> */}
  <div className="w-full bg-white mt-6 md:mt-0">
    <div className="max-w-md mx-auto">
      <h2 className="text-3xl font-bold text-[#E4A9F0] mb-6">Send us a message</h2>
      
      <form className="space-y-6">
        {/* <!-- Name Input --> */}
        <div>
          <label className="block text-black font-medium mb-2">Your Name</label>
          <input 
            type="text" 
            className="w-full px-4 py-3 border border-purple-100 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="John Doe"
          />
        </div>

        {/* <!-- Email Input --> */}
        <div>
          <label className="block text-black font-medium mb-2">Enter email address</label>
          <input 
            type="email" 
            className="w-full px-4 py-3 border border-purple-100 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label className="block text-black font-medium mb-2">Your Comment</label>
          <textarea 
            rows="4"
            className="w-full px-4 py-3 border border-purple-100 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Write your comment here..."
          ></textarea>
        </div>

        {/* <!-- Checkbox --> */}
        <div className="flex items-center">
          <input 
            type="checkbox" 
            className="h-4 w-4 text-purple-600 border-purple-300 rounded focus:ring-purple-500"
          />
          <label className="ml-2 text-gray-600">
            Save my name, email, & website in this browser for the next time I comment.
          </label>
        </div>

        {/* <!-- Submit Button --> */}
        <button
          type="submit"
          className="w-full bg-[#E4A9F0] text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors font-medium"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>



</div>
        
    )
}


export default Form
