import { ScreenTypeTheme } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface QuizI {
  slug: string;
  answer: string;
}

export interface UserState {
  quiz: QuizI[];
  theme: ScreenTypeTheme;
}

const initialState: UserState = { quiz: [], theme: 'light' };

// SAMPLE TO FETCH EXISTING USER --->
// export const getUser = createAsyncThunk<UserState, void>(
//   'user/getUser',
//   async (_, { rejectWithValue }) => {
//     const uuid = localStorage.getItem('uuid');
//     if (uuid) {
//       try {
//         const response = await fetch(`/users?uuid=${uuid}`);
//         const data = await response.json();

//         if (response.status < 200 || response.status >= 300) {
//           return rejectWithValue('Failed to fetch user data');
//         }
//         return { ...data, uuid };
//       } catch (error) {
//         return rejectWithValue('Something went wrong');
//       }
//     }

//     return { quiz: [] };
//   },
// );
//<---

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addAnswer: (state, action: PayloadAction<QuizI>) => {
      const existingIndex = state.quiz.findIndex(
        (quiz) => quiz.slug === action.payload.slug,
      );

      if (existingIndex !== -1) {
        state.quiz[existingIndex].answer = action.payload.answer;
      } else {
        state.quiz.push(action.payload);
      }
    },
    setTheme: (state, action: PayloadAction<ScreenTypeTheme>) => {
      state.theme = action.payload;
    },
  },
  //SAMPLE OF THE STORE REHIDRATION USING DATA FROM BACKEND--->
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(getUser.fulfilled, (state, action) => {
  //       state.quiz = action.payload.quiz;
  //     })
  //     .addCase(getUser.rejected, (state, action) => {
  //       console.error(action.payload);
  //     });
  // },
  //<---
});

export const selectAllQuizAnswers = (state: { quiz: QuizI[] }) => state.quiz;

export const selectAnswerBySlug = (slug: string) => (state: { quiz: QuizI[] }) =>
  state.quiz.find((quiz) => quiz.slug === slug)?.answer;

export const selectTheme = (state: { user: UserState }) => state.user.theme;

export const { addAnswer, setTheme } = userSlice.actions;

export default userSlice.reducer;
