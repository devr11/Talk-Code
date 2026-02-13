import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/clerk-react";
import toast from "react-hot-toast";

function HomePage() {
  // fetch some data without using tanstack

//   const [books, setBooks] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const getBooks = async () => {
//       setIsLoading(true);
//       try {
//         const res = await fetch("/api/books");
//         const data = await res.json();
//         setBooks(data);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     getBooks();
//   }, []);

  // with tanstack

//   const {data, isLoading, error} = useQuery({
//     queryFn: () => fetch("/api/books").then(res => res.json())
//   })

  return (
    <div>
      <button
        className="btn btn-secondary"
        onClick={() => toast.success("This is a success toast")}
      >
        Click Me
      </button>
      <SignedOut>
        <SignInButton>
          <button className="btn btn-primary">LogIn</button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton />
      </SignedIn>
    </div>
  );
}

export default HomePage;
