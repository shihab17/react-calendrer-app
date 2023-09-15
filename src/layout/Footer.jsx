export default function Footer() {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <div className="bg-blue-900 text-white p-10">
            <div className="container mx-auto">
                <div className="flex justify-between">
                    <div className="flex gap-10">
                        <ul className="space-y-2">
                            <li className="text-lg font-semibold">Upcoming</li>
                            <li className="text-sm">Shipping</li>
                            <li className="text-sm">How it works</li>
                        </ul>
                        <ul className="space-y-2">
                            <li className="text-lg font-semibold">Support</li>
                            <li className="text-sm">Careers</li>
                        </ul>
                        <ul className="space-y-2">
                            <li className="text-lg font-semibold">List your gear</li>
                            <li className="text-sm">Contact team</li>
                        </ul>
                    </div>
                </div>
                <div className="flex w-full mt-10 gap-5">
                    <p className="text-sm">Privacy Policy</p>
                    <p className="text-sm">Terms & Condition</p>
                    <p className="ml-auto text-sm"> &#169; Calendar View {year}</p>
                </div>
            </div>
        </div>
    );
}
