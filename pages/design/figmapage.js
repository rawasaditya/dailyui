import React, { useEffect, useState } from "react";
import { RiShareForwardLine } from "react-icons/ri";
import Image from "next/image";
import { FaClipboard } from "react-icons/fa";
import ColorDialogue from "../../components/ColorDialogue/ColorDialogue";
import Toast from "../../components/Toast/Toast";
const Figmapage = () => {
  const [url, setUrl] = useState("");
  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const [toast, settoast] = useState(false);
  const copyUrl = (url) => {
    navigator.clipboard.writeText(url);
    settoast(true);
  };

  return (
    <div className="flex grid grid-cols-1 gap-5 lg:grid-cols-6 pt-11">
      <Toast visible={toast} setVisible={settoast} text="URL copied !" />

      <input type="checkbox" id="shareModal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="relative modal-box">
          <label
            htmlFor="shareModal"
            className="absolute btn btn-sm btn-circle right-2 top-2"
          >
            ✕
          </label>
          <h3 className="mb-4 text-lg font-bold">
            Share this design with link!
          </h3>
          <p className="flex justify-between gap-2 p-3 align-middle border border-gray-400 rounded-md ">
            {url}
            <FaClipboard
              className="text-lg text-red-300 cursor-pointer hover:text-red-400"
              onClick={() => copyUrl(url)}
            />
          </p>
        </div>
      </div>

      <div className="col-span-4">
        <Image
          src="https://uidesigndaily.fra1.digitaloceanspaces.com/uploads/1585/day_1585.png"
          width={500}
          height={350}
          layout="responsive"
          alt="image"
        />
      </div>
      <div className="col-span-2 p-5 md:my-3">
        <label htmlFor="shareModal" className="mb-4 btn btn-outline btn-sm">
          <RiShareForwardLine className="mr-2 text-lg" /> <span>Share</span>
        </label>
        <div className="gap-0 my-3">
          <div>
            <h2 className="text-2xl card-title">Billing Page</h2>
            <div className="flex flex-col gap-2">
              <span className="text-gray-400">April 20</span>
              <div>
                <span className="tag">billing</span>
                <span className="tag">payment</span>
                <span className="tag">ecommerce</span>
              </div>
            </div>
          </div>
        </div>
        <button className="w-full my-3 btn btn-outline btn-success">
          Download
        </button>
        <ColorDialogue />
      </div>
    </div>
  );
};

export default Figmapage;
