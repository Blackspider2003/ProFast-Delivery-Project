import React from "react";
import { useForm } from "react-hook-form";
import Footer from "../../SharedComponents/Footer/Footer";
import Navbar from "../../SharedComponents/Navbar/Navbar";

const AddParcel = () => {
  const {
    register,
    handleSubmit,
    
  } = useForm();

  const onSubmit = (data) => {
    console.log("Parcel Data:", data);
    // Submit to backend or API here
  };
  

  return (
    <>
    <Navbar></Navbar>
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-green-900 mb-6">Add Parcel</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Document Type */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Enter your parcel details</h3>
          <div className="flex items-center gap-6 mb-4">
            <label className="flex items-center gap-2 font-medium">
              <input
                type="radio"
                value="Document"
                {...register("parcelType", { required: true })}
                defaultChecked
              />
              Document
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="Non-Document"
                {...register("parcelType", { required: true })}
              />
              Not-Document
            </label>
          </div>

          {/* Parcel Name & Weight */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Parcel Name"
              {...register("parcelName", { required: true })}
              className="input input-bordered w-full"
            />
            <input
              type="number"
              step="0.01"
              placeholder="Parcel Weight (KG)"
              {...register("parcelWeight", { required: true })}
              className="input input-bordered w-full"
            />
          </div>
        </div>

        {/* Sender & Receiver Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Sender Details */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Sender Details</h4>
            <input
              type="text"
              placeholder="Sender Name"
              {...register("senderName", { required: true })}
              className="input input-bordered w-full mb-3"
            />
            <select
              {...register("senderWarehouse", { required: true })}
              className="select select-bordered w-full mb-3"
            >
              <option value="">Select Warehouse</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Chattogram">Chattogram</option>
              {/* Add more options */}
            </select>
            <input
              type="text"
              placeholder="Address"
              {...register("senderAddress", { required: true })}
              className="input input-bordered w-full mb-3"
            />
            <input
              type="text"
              placeholder="Sender Contact No"
              {...register("senderContact", { required: true })}
              className="input input-bordered w-full mb-3"
            />
            <select
              {...register("senderRegion", { required: true })}
              className="select select-bordered w-full mb-3"
            >
              <option value="">Select your region</option>
              <option value="North">North</option>
              <option value="South">South</option>
              {/* Add more */}
            </select>
            <textarea
              placeholder="Pickup Instruction"
              {...register("pickupInstruction")}
              className="textarea textarea-bordered w-full"
            ></textarea>
          </div>

          {/* Receiver Details */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Receiver Details</h4>
            <input
              type="text"
              placeholder="Receiver Name"
              {...register("receiverName", { required: true })}
              className="input input-bordered w-full mb-3"
            />
            <select
              {...register("receiverWarehouse", { required: true })}
              className="select select-bordered w-full mb-3"
            >
              <option value="">Select Warehouse</option>
              <option value="Khulna">Khulna</option>
              <option value="Sylhet">Sylhet</option>
              {/* Add more */}
            </select>
            <input
              type="text"
              placeholder="Receiver Address"
              {...register("receiverAddress", { required: true })}
              className="input input-bordered w-full mb-3"
            />
            <input
              type="text"
              placeholder="Receiver Contact No"
              {...register("receiverContact", { required: true })}
              className="input input-bordered w-full mb-3"
            />
            <select
              {...register("receiverRegion", { required: true })}
              className="select select-bordered w-full mb-3"
            >
              <option value="">Select your region</option>
              <option value="North">North</option>
              <option value="East">East</option>
              {/* Add more */}
            </select>
            <textarea
              placeholder="Delivery Instruction"
              {...register("deliveryInstruction")}
              className="textarea textarea-bordered w-full"
            ></textarea>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-sm text-gray-500">* Pickup Time 4pm-7pm Approx.</p>

        {/* Submit */}
        <div>
          <button type="submit" className="btn btn-success px-10">
            Proceed to Confirm Booking
          </button>
        </div>
      </form>
    </div>
    <Footer></Footer>
    </>
  );
};

export default AddParcel;