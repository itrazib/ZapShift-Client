import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import Swal from "sweetalert2";


const MyPercels = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: percels = [], refetch } = useQuery({
    queryKey: ["myPercels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/percels?email=${user.email}`);
      return res.data;
    },
  });


  const handlePercelDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/percel/${id}`)
        .then(res => {
          console.log(res.data.result)
          refetch()
          if(res.data.result.deletedCount){
             Swal.fire({
          title: "Deleted!",
          text: "Your Percel Request has been deleted.",
          icon: "success",
        });

          }
        })
       
      }
    });
  };

  const handlePayment = async (percel) => {
   const paymentInfo = {
    percelName:percel.percelName,
     percelId: percel._id,
    cost:percel.cost,
    senderEmail:percel.senderEmail,

    }

    const res = await axiosSecure.post('/payment-checkout-session', paymentInfo)
    console.log(res.data)
    // window.location.href = res.data.url;
    window.location.assign(res.data.url);
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Cost</th>
              <th>Payment</th>
              <th>Delivery Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {percels.map((percel, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{percel.percelName}</td>
                <td>{percel.cost}</td>
                <td>
                  {percel.paymentStatus == "paid" ? (
                    <span className="text-green-400">Paid</span>
                  ) : (
                   <button onClick={() => handlePayment(percel)} className="btn btn-primary text-black">Pay</button>
                  )}
                </td>
                <td>{percel.deliveryStatus}</td>

                <td>
                  <button className="btn btn-square hover:btn-primary">
                    <FaMagnifyingGlass />
                  </button>
                  <button className="btn btn-square hover:btn-primary mx-2">
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handlePercelDelete(percel._id)}
                    className="btn btn-square hover:btn-primary"
                  >
                    <MdDeleteSweep />
                  </button>
                </td>
              </tr>
            ))}
            {/* row 1 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPercels;
