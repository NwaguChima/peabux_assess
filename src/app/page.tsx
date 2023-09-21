'use client';

import CreateStudent from '@/components/CreateStudent';
import CreateTeacher from '@/components/CreateTeacher';
import { Button } from '@/components/ui/Button';
import { useState } from 'react';
import Modal from 'react-modal';

export default function Home() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '50vw',
      height: '90vh',
    },
  };

  return (
    <main className="flex min-h-screen flex-col gap-10">
      <div className="flex items-center justify-between bg-slate-300 p-4">
        <p className="p-1  rounded-md font-bold text-2xl">Peabux</p>
        <div className="flex items-center gap-4">
          <Button
            onClick={() => {
              setModalType('student');
              setIsOpen(true);
            }}
          >
            Create Student
          </Button>
          <Button
            onClick={() => {
              setModalType('teacher');
              setIsOpen(true);
            }}
          >
            Create Teacher
          </Button>
        </div>
      </div>

      <div className="p-4 bg-slate-50">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setIsOpen(false)}
          style={customStyles}
          contentLabel="Create Modal"
        >
          {modalType === 'student' ? <CreateStudent /> : <CreateTeacher />}
        </Modal>
      </div>
    </main>
  );
}
