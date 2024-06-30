import axios from "axios";

async function getUserDetails(){
  // await new Promise((r)=> setTimeout(r,4000)); 
  const response = await axios.get('http://localhost:3000/api/user')
  return response.data;
}

// creating an async component only on server (not on client)
export default async function Home() {
  const userDetails = await getUserDetails();

  return (
    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">      
            <div className="border p-8 rounded">
              <div className="bg-black text-white p-4 rounded-md mb-4 mx-auto">
                This is the landing page
              </div>
                <div>
                    Name: {userDetails?.username}
                </div>
                
                username : {userDetails?.email}
            </div>
        </div>
    </div>
  );
}
