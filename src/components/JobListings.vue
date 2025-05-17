<script setup>
import { db } from '@/firebase';
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { reactive, onMounted, onUnmounted } from 'vue';

const state = reactive({
  jobs: [],
  isLoading: true
});

let unsubscribe; // To store the unsubscribe function

onMounted(() => {
  const q = query(
    collection(db, "jobs"),
    orderBy("createdAt", "desc")
  );
  
  // Set up real-time listener
  unsubscribe = onSnapshot(q, (querySnapshot) => {
    state.jobs = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    state.isLoading = false;
  }, (error) => {
    console.error("Error listening to jobs:", error);
    state.isLoading = false;
  });
});

// Clean up listener when component unmounts
onUnmounted(() => {
  if (unsubscribe) unsubscribe();
});
</script>