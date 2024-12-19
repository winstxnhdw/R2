import { OpenAPIHono, createRoute, z } from '@hono/zod-openapi'

const FileSchema = z.custom<File>((v) => v instanceof File).openapi({ type: 'string', format: 'binary' })
const FilesRequestSchema = z.object({ files: z.array(FileSchema) })

const route = createRoute({
  method: 'get',
  path: '/files',
  security: [{ Bearer: [] }],
  responses: {
    200: {
      content: {
        'multipart/form-data': {
          schema: FilesRequestSchema,
        },
      },
      description: '',
    },
    401: {
      content: {
        'text/plain': { schema: z.literal('Unauthorized') },
      },
      description: 'The response when the request is unauthorized.',
    },
  },
})

export const files = new OpenAPIHono().openapi()
