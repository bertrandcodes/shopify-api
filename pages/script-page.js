import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Button, Card, Layout, Page, ResourceList, Stack } from '@shopify/polaris';

const CREATE_SCRIPT_TAG = gql`
mutation scriptTagCreate($input: ScriptTagInput!){
    scriptTagCreate(input: $input){
        scriptTag {
            id
        }
        userErrors {
            field
            message
        }
    }
}`;

const QUERY_SCRIPTTAGS = gql`
query{
    scriptTags(first:5){
      edges{
        node{
          id
          src
          displayScope
        }
      }
    }
  }
`

const DELETE_SCRIPTAG = gql`
mutation scriptTagDelete($id: ID!){
    scriptTagDelete(id: $id){
        deletedScriptTagId
    		userErrors{
          field
          message
        }
    }
}
`

function ScriptPage() {

    const [createScripts] = useMutation(CREATE_SCRIPT_TAG)
    const [deleteScripts] = useMutation(DELETE_SCRIPTAG)
    const { loading, error, data } = useQuery(QUERY_SCRIPTTAGS)

    if (loading) return <div>Loading...</div>
    if (error) return <div>{error.message}</div>

    return (
        <Page>
            <Layout>
                <Layout.Section>
                    <Card title="These are the Script Tags:" sectioned>
                        <p>
                            Create or Delete a Script Tag
                        </p>
                    </Card>
                </Layout.Section>
                <Layout.Section secondary>
                    <Card title="Delete Tag" sectioned>
                        <Button
                            primary
                            size="slim"
                            type="submit" onClick={() => {
                                createScripts({
                                    variables: {
                                        input: {
                                            src: "https://8e135ea8749a.ngrok.io/test-script.js",
                                            displayScope: "ALL"
                                        }
                                    },
                                    refetchQueries: [{ query: QUERY_SCRIPTTAGS }]
                                })
                            }}>Create Script Tag</Button>
                    </Card>
                </Layout.Section>
                <Layout.Section>
                    <Card>
                        <ResourceList
                            showHeader
                            resourceName={{ singular: 'Script', plural: 'Scripts' }}
                            items={data.scriptTags.edges}
                            renderItem={item => {
                                return (
                                    <ResourceList.Item id={item.id}>
                                        <Stack>
                                            <Stack.Item>
                                                <p>
                                                    {item.node.id}
                                                </p>
                                            </Stack.Item>
                                            <Stack.Item>
                                                <Button type='submit' onClick={() => {
                                                    deleteScripts({
                                                        variables: {
                                                            id: item.node.id
                                                        },
                                                        refetchQueries: [{ query: QUERY_SCRIPTTAGS }]
                                                    })
                                                }}>
                                                    Delete Script Tag
                                                </Button>
                                            </Stack.Item>
                                        </Stack>
                                    </ResourceList.Item>
                                )
                            }}
                        />
                    </Card>
                </Layout.Section>
            </Layout>
        </Page>
    )
}

export default ScriptPage;


    // <div>
    //     <h1>These are the script tags right now:</h1>
    //     <button type='submit' onClick={() => {
    //         console.log(createScripts)
    //         createScripts({
    //             variables: {
    //                 input: {
    //                     src: "https://fd8b3860e19d.ngrok.io/test-script.js",
    //                     displayScope: "ALL"
    //                 }
    //             },
    //             refetchQueries: [{ query: QUERY_SCRIPTTAGS }]
    //         })
    //     }}>
    //         Create Script Tag
    //     </button>

    //     {
    //         data.scriptTags.edges.map(item => {
    //             return (
    //                 <div key={item.node.id}>
    //                     <p>
    //                         {item.node.id}
    //                     </p>
    //                     <button type='submit' onClick={() => {
    //                         deleteScripts({
    //                             variables: {
    //                                 id: item.node.id
    //                             },
    //                             refetchQueries: [{ query: QUERY_SCRIPTTAGS }]
    //                         })
    //                     }}>Delete Script Tag</button>
    //                 </div>

    //             )
    //         })
    //     }
    // </div >