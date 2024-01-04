import React, { useEffect, useState } from 'react'
import { PlusOutlined } from '@ant-design/icons'
import { Modal, Upload, Table, Card } from 'antd'
import type { RcFile, UploadProps } from 'antd/es/upload'
import type { UploadFile } from 'antd/es/upload/interface'
import type { ColumnsType } from 'antd/es/table'
import { useRunRquest } from '@utils/request'

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = (error) => reject(error)
  })

interface DataType {
  key: string
  workFlowId: string
  age: number
  address: string
  tags: string[]
}

const columns: ColumnsType<DataType> = [
  {
    title: '序号',
    dataIndex: 'name',
    key: 'name',
    render: (_, __, index) => index + 1,
  },
  {
    title: '图片',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '状态',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '图片角度',
    key: 'tags',
    dataIndex: 'tags',
  },
  {
    title: '分类',
    key: 'action',
  },
  {
    title: 'OCR识别结果',
    key: 'action',
  },
]

const Home: React.FC = () => {
  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [previewTitle, setPreviewTitle] = useState('')
  const [fileList, setFileList] = useState<UploadFile[]>([])
  const { data, loading } = useRunRquest('/underwriting-rule/workflow/page', 'post')

  const handleCancel = () => setPreviewOpen(false)
  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile)
    }
    setPreviewImage(file.url || (file.preview as string))
    setPreviewOpen(true)
    setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1))
  }
  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    return setFileList(newFileList)
  }
  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type='button'>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  )

  return (
    <>
      <section style={{ padding: '0 20px' }}>
        <Card style={{ marginTop: '20px' }}>
          <Upload
            action='https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188'
            listType='picture-card'
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}>
            {fileList.length >= 10 ? null : uploadButton}
          </Upload>
        </Card>
        <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
          <img alt='example' style={{ width: '100%' }} src={previewImage} />
        </Modal>
        <Card style={{ marginTop: '20px' }} title='识别结果'>
          <Table rowKey={(record) => record?.workFlowId} columns={columns} loading={loading} pagination={false} dataSource={data?.records || []}></Table>
        </Card>
      </section>
    </>
  )
}

export default Home
