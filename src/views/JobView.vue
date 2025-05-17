<script setup>
import { db } from '@/firebase';
import { doc, onSnapshot, deleteDoc } from "firebase/firestore";
import { useRoute, useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';
import { reactive, onMounted, onUnmounted } from 'vue';

const route = useRoute();
const router = useRouter();
const toast = useToast();
const jobId = route.params.id;

const state = reactive({
  job: {},
  isLoading: true
});

let unsubscribe;

onMounted(() => {
  const docRef = doc(db, "jobs", jobId);
  
  unsubscribe = onSnapshot(docRef, (docSnap) => {
    if (docSnap.exists()) {
      state.job = {
        id: docSnap.id,
        ...docSnap.data()
      };
    } else {
      router.push('/404');
    }
    state.isLoading = false;
  }, (error) => {
    console.error("Error listening to job:", error);
    state.isLoading = false;
  });
});

onUnmounted(() => {
  if (unsubscribe) unsubscribe();
});

const deleteJob = async () => {
  try {
    const confirm = window.confirm('Are you sure you want to delete this job?');
    if (confirm) {
      await deleteDoc(doc(db, "jobs", jobId));
      toast.success('Job Deleted Successfully');
      router.push('/jobs');
    }
  } catch (error) {
    console.error('Error deleting job:', error);
    toast.error('Job Not Deleted');
  }
};
</script>