/* 5d52a264470029b093e925332414a1b8d5c04281
 * This file is automatically generated by graphql-let. */

import * as Types from "graphql-let/__generated__/__types__";
import * as Apollo from '@apollo/client';
export declare type LoginMutationVariables = Types.Exact<{
  email: Types.Scalars['String'];
  password: Types.Scalars['String'];
}>;
export declare type LoginMutation = ({
  __typename?: 'Mutation';
} & {
  login?: Types.Maybe<({
    __typename?: 'AuthenticatedUser';
  } & Pick<Types.AuthenticatedUser, '[object Object]'>)>;
});
export declare const LoginDocument: Apollo.DocumentNode;
export declare type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;
/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */

export declare function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>): Apollo.MutationTuple<LoginMutation, Types.Exact<{
  email: string;
  password: string;
}>>;
export declare type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export declare type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export declare type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;