import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import Selectbox from "@/Components/Selectbox";
import { useEffect, useState } from "react";

export default function SubmitAttendance({ auth }) {
    const [transitioning, setTransitioning] = useState(false);
    const { data, setData, post, errors, processing } = useForm({
        status: "attend",
        description: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("attendances.submit"), {
            preserveScroll: true,
            onSuccess: () => {
                alert("Absensi Berhasil");
            },
            onError: () => {
                console.log(errors);
            },
        });
    };

    useEffect(() => {
        if (data.status === "attend") {
            setTransitioning(false);
            // setTimeout(() => {
            //     setTransitioning(false);
            // }, 3000);
        } else {
            setTransitioning(true);
        }
    }, [data.status]);

    return (
        <form onSubmit={submit} className="mt-6 space-y-6">
            <div>
                <InputLabel htmlFor="info" value="Silahkan lakukan absensi" />

                <Selectbox
                    id="status"
                    currentValue={data.role}
                    onChange={(e) => setData("status", e.target.value)}
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    options={[
                        {
                            value: "attend",
                            label: "Hadir",
                        },
                        {
                            value: "leave",
                            label: "Cuti",
                        },
                        {
                            value: "sick",
                            label: "Sakit",
                        },
                        {
                            value: "permit",
                            label: "Izin",
                        },
                        {
                            value: "business_trip",
                            label: "Perjalanan Dinas",
                        },
                        {
                            value: "remote",
                            label: "Kerja Remote (Diluar Kantor)",
                        },
                    ]}
                />

                <InputError className="mt-2" message={errors.status} />
            </div>

            <Transition
                show={transitioning}
                enter="transition ease-in-out"
                enterFrom="opacity-0"
                leave="transition ease-in-out"
                leaveTo="opacity-0"
            >
                <div>
                    <InputLabel htmlFor="description" value="Penjelasan" />

                    <TextInput
                        id="status"
                        onChange={(e) => setData("description", e.target.value)}
                        className="w-full"
                    />

                    <InputError className="mt-2" message={errors.description} />
                </div>
            </Transition>

            <div className="flex items-center gap-4">
                <PrimaryButton disabled={processing}>Absensi</PrimaryButton>
            </div>
        </form>
    );
}