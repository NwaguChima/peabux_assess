import { Button } from '@/components/ui/Button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-10">
      <div className="flex items-center justify-between bg-slate-300 px-4 py-4">
        <p className="p-1  rounded-md font-bold text-2xl">Peabux</p>
        <Button>Create Profile</Button>
      </div>
    </main>
  );
}
