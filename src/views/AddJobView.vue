<script setup>
import { db } from '@/firebase';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';
import { reactive } from 'vue';

const router = useRouter();
const toast = useToast();

const form = reactive({
  type: 'Full-Time',
  title: '',
  description: '',
  salary: '',
  location: '',
  company: {
    name: '',
    description: '',
    contactEmail: '',
    contactPhone: '',
  },
});

const handleSubmit = async () => {
  try {
    const docRef = await addDoc(collection(db, "jobs"), {
      ...form,
      createdAt: serverTimestamp()
    });
    toast.success('Job Added Successfully');
    router.push(`/jobs/${docRef.id}`);
  } catch (error) {
    console.error('Error adding job:', error);
    toast.error('Job Was Not Added');
  }
};
</script>