import { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";

const SendPercel = () => {
  const { 
    register, 
    handleSubmit, 
    setValue, 
    control 
} = useForm();

const axiosSecure = useAxiosSecure();
const {user} = useAuth()

  const serviceCenters = useLoaderData();
  const regionsDuplicate = serviceCenters.map((r) => r.region);
  const regions = [...new Set(regionsDuplicate)];
  console.log(regions);
  const senderRegion = useWatch({ control, name: "senderRegion" }) || "";
  const receiverRegion = useWatch({ control, name: "receiverRegion" }) || "";

  useEffect(() => {
    setValue("senderDistrict", "");
  }, [senderRegion]);

  useEffect(() => {
    setValue("receiverDistrict", "");
  }, [receiverRegion]);

  const districtByRegion = (region) => {
    const regionDistrict = serviceCenters.filter((r) => r.region === region);
    const districts = regionDistrict.map((d) => d.district);
    return districts;
  };

  const handlePercelDetails = (data) => {
    console.log(data);
    const isDocument = data.percelType === "document";
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    const percelWeight = parseFloat(data.percelWeight);
    // console.log(sameDistrict)
    let cost = 0;
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (percelWeight < 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const extraWeight = percelWeight - 3;
        cost = isSameDistrict
          ? 110 + extraWeight * 40
          : 150 + extraWeight * 40 + 40;
      }
    }
    console.log(cost);

    Swal.fire({
      title: "Agree With the cost?",
      text: `You Will be Charged ${cost}!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I Agree!",
    }).then((result) => {
      if (result.isConfirmed) {

        axiosSecure.post('/percels', data)
        .then(res => {
            console.log(res.data)
        })
        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success",
        // });
      }
    });
  };

  return (
    <div className="bg-white p-15 mt-10 rounded-2xl shadow-2xl mb-5">
      <div className="text-secondary space-y-3">
        <h1 className="text-3xl font-bold">Send A Percel</h1>
        <p>Enter your parcel details</p>
      </div>

      <form onSubmit={handleSubmit(handlePercelDetails)}>
        <div>
          <div className="border-y-1 border-gray-300 py-3 mt-3">
            <div className="space-x-3 mt-3">
              <input
                type="radio"
                name="radio-1"
                className="radio"
                value="document"
                {...register("percelType")}
                defaultChecked
              />
              <label className="label">Document</label>
              <input
                type="radio"
                name="radio-1"
                value="non-document"
                {...register("percelType")}
                className="radio"
              />
              <label className="label">Non-Document</label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-15 mt-5">
              <fieldset className="fieldset ">
                <label className="label">Percel Name</label>
                <input
                  type="text"
                  className="input w-full"
                  {...register("percelName")}
                  placeholder="Percel Name"
                />
              </fieldset>
              <fieldset className="fieldset ">
                <label className="label">Percel Weight(kg)</label>
                <input
                  type="text"
                  className="input w-full"
                  {...register("percelWeight")}
                  placeholder="Percel Weight(kg)"
                />
              </fieldset>
            </div>
          </div>
          {/* parent Div */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-15">
            {/* left */}
            <div>
              <h1 className="text-xl font-bold mt-3">Sender Details</h1>
              <fieldset className="fieldset ">
                <label className="label">Sender Name</label>
                <input
                  type="text"
                  className="input w-full"
                  defaultValue={user?.displayName}
                  {...register("senderName")}
                  placeholder="Sender Name"
                />
                <label className="label">Sender Email</label>
                <input
                  type="email"
                  defaultValue={user?.email}
                  className="input w-full"
                  {...register("senderEmail")}
                  placeholder="Sender Email"
                />
                {/* sender region */}
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Sender Regions</legend>
                  <select
                    {...register("senderRegion")}
                    className="select w-full"
                  >
                    <option disabled={true}>Pick a region</option>
                    {regions.map((r, i) => (
                      <option key={i} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </fieldset>
                {/* sender district */}
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Sender District</legend>
                  <select
                    {...register("senderDistrict")}
                    className="select w-full"
                  >
                    <option disabled={true}>Pick a District</option>
                    {districtByRegion(senderRegion).map((r, i) => (
                      <option key={i} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </fieldset>

                {/* address */}
                <label className="label">Sender Address</label>
                <input
                  type="text"
                  className="input w-full"
                  {...register("senderAddress")}
                  placeholder="Sender Address"
                />
                {/* Phone no */}
                <label className="label">Sender Phone No</label>
                <input
                  type="number"
                  className="input w-full"
                  {...register("senderPhoneNo")}
                  placeholder="Sender Phone No"
                />
                {/* Pickup Details */}
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">
                    Pickup Instruction
                  </legend>
                  <textarea
                    {...register("pickupInstruction")}
                    className="textarea h-24 w-full"
                    placeholder="Pickup Instruction"
                  ></textarea>
                </fieldset>
              </fieldset>
            </div>
            {/* right */}
            <div>
              <h1 className="text-xl font-bold mt-3">Receiver Details</h1>
              <fieldset className="fieldset ">
                <label className="label">Receiver Name</label>
                <input
                  type="text"
                  className="input w-full"
                  {...register("receiverName")}
                  placeholder="Receiver Name"
                />
                {/* Receiver Email */}
                <label className="label">Receiver Email</label>
                <input
                  type="email"
                  className="input w-full"
                  {...register("receiverEmail")}
                  placeholder="Receiver Email"
                />
                {/* Receiver region */}
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Receiver Regions</legend>
                  <select
                    {...register("receiverRegion")}
                    className="select w-full"
                  >
                    <option disabled={true}>Pick a region</option>
                    {regions.map((r, i) => (
                      <option key={i} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </fieldset>
                {/* Receiver district */}
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Receiver District</legend>
                  <select
                    {...register("receiverDistrict")}
                    className="select w-full"
                  >
                    <option disabled={true}>Pick a District</option>
                    {districtByRegion(receiverRegion).map((r, i) => (
                      <option key={i} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </fieldset>
                {/* Address */}
                <label className="label">Receiver Address</label>
                <input
                  type="text"
                  className="input w-full"
                  {...register("receiverAddress")}
                  placeholder="Receiver address"
                />
                {/* receiver Phone */}
                <label className="label">Receiver Phone No</label>
                <input
                  type="number"
                  className="input w-full"
                  {...register("receiverPhoneNo")}
                  placeholder="Receiver Phone No"
                />

                {/* Delivery Details */}
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">
                    Delivery Instruction
                  </legend>
                  <textarea
                    {...register("deliveryInstruction")}
                    className="textarea h-24 w-full"
                    placeholder="Delivery Instruction"
                  ></textarea>
                </fieldset>
              </fieldset>
            </div>
          </div>
          <button className="btn btn-primary text-black mt-5">
            Procced to confirm Booking
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendPercel;
