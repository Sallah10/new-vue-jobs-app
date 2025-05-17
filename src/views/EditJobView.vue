<script setup>
import { db } from '@/firebase';
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useRoute, useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';
import { reactive, onMounted } from 'vue';

const route = useRoute();
const router = useRouter();
const toast = useToast();
const jobId = route.params.id;

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

const state = reactive({
  isLoading: true,
});

const handleSubmit = async () => {
  try {
    await updateDoc(doc(db, "jobs", jobId), {
      title: form.title,
      type: form.type,
      location: form.location,
      description: form.description,
      salary: form.salary,
      company: {
        name: form.company.name,
        description: form.company.description,
        contactEmail: form.company.contactEmail,
        contactPhone: form.company.contactPhone,
      },
      updatedAt: new Date().toISOString()
    });
    
    toast.success('Job Updated Successfully');
    router.push(`/jobs/${jobId}`);
  } catch (error) {
    console.error('Error updating job:', error);
    toast.error('Failed to Update Job');
  }
};

onMounted(async () => {
  try {
    const docRef = doc(db, "jobs", jobId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      const jobData = docSnap.data();
      form.type = jobData.type;
      form.title = jobData.title;
      form.description = jobData.description;
      form.salary = jobData.salary;
      form.location = jobData.location;
      form.company.name = jobData.company?.name || '';
      form.company.description = jobData.company?.description || '';
      form.company.contactEmail = jobData.company?.contactEmail || '';
      form.company.contactPhone = jobData.company?.contactPhone || '';
    } else {
      toast.error('Job not found');
      router.push('/jobs');
    }
  } catch (error) {
    console.error('Error fetching job:', error);
    toast.error('Failed to load job');
  } finally {
    state.isLoading = false;
  }
});
</script>