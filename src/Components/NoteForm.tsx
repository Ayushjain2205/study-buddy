import { FormEvent, useRef, useState } from "react";
import { Button, Col, Form, FormGroup, Row, Stack } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import CreatableReactSelect from "react-select/creatable";
import { NoteData, Tag } from "../App";
import { v4 as uuidV4 } from "uuid";

type NoteFormProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
} & Partial<NoteData>;

export function NoteForm({
  onSubmit,
  onAddTag,
  availableTags,
  title = "",
  markdown = "",
  tags = [],
}: NoteFormProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const markdownRef = useRef<HTMLTextAreaElement>(null);
  const [selectedTags, setSelectedTags] = useState<Tag[]>(tags);

  const navigate = useNavigate();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    onSubmit({
      title: titleRef.current!.value,
      markdown: markdownRef.current!.value,
      tags: selectedTags,
    });
    navigate("..");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={4}>
        <Row>
          <Col>
            <FormGroup controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                ref={titleRef}
                required
                type="text"
                defaultValue={title}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup controlId="tags">
              <Form.Label>Tags</Form.Label>
              <CreatableReactSelect
                theme={(theme) => ({
                  ...theme,
                  borderColor: "#333 !important",
                  borderWidth: "2px !important",
                  outline: "none !important",
                  borderRadius: "255px 25px 225px 25px/25px 225px 25px 255px",
                })}
                isMulti
                options={availableTags.map((tag) => ({
                  value: tag.id,
                  label: tag.label,
                }))}
                value={selectedTags.map((tag) => ({
                  value: tag.id,
                  label: tag.label,
                }))}
                onCreateOption={(label) => {
                  const newTag = {
                    id: uuidV4(),
                    label,
                  };
                  onAddTag(newTag);
                  setSelectedTags((prevTags) => [...prevTags, newTag]);
                }}
                onChange={(tags) => {
                  setSelectedTags(
                    tags.map((tag) => ({
                      id: tag.value,
                      label: tag.label,
                    }))
                  );
                }}
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup controlId="markdown">
          <Form.Label>Body</Form.Label>
          <Form.Control
            ref={markdownRef}
            required
            as="textarea"
            rows={15}
            defaultValue={markdown}
          />
        </FormGroup>
        <Stack direction="horizontal" gap={2} className="justify-content-end">
          <Button variant="primary" type="submit">
            Save
          </Button>
          <Link to="..">
            <Button variant="outline-secondary" type="button">
              Cancel
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Form>
  );
}
